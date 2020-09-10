package com.euclid.dealbook.types;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.bouncycastle.util.encoders.Base64;
import org.hibernate.HibernateException;
import org.hibernate.dialect.Dialect;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.type.StringType;
import org.jasypt.util.text.BasicTextEncryptor;

/**
 * The Class DealbookTextType.
 */
public class DealbookTextType extends DealbookGenericType<String> {

	/**
	 * The encryptor.
	 */
	private final BasicTextEncryptor encryptor = new BasicTextEncryptor();

	/**
	 * Instantiates a new Dealbook text type.
	 *
	 * @Dealbook Instantiates a new Dealbook text type.
	 */
	public DealbookTextType() {
		super(String.class);
		encryptor.setPassword("DEALBOOK.2020");
	}

	/**
	 * Instantiates a new Dealbook text type.
	 *
	 * @param clazz the clazz
	 * @Dealbook Instantiates a new Dealbook text type.
	 */
	public DealbookTextType(Class<String> clazz) {
		super(clazz);
		encryptor.setPassword("DEALBOOK.2020");
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#sqlTypes()
	 */
	@Override
	public int[] sqlTypes() {
		return new int[] { Types.VARCHAR };
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.Dealbook.gst.types.DealbookGenericType#get(java.sql.ResultSet,
	 * String[], org.hibernate.engine.spi.SessionImplementor, java.lang.Object)
	 */
	@Override
	public String get(ResultSet rs, String[] names, SessionImplementor session, Object owner) throws SQLException {
		String value = rs.getString(names[0]);
		if (value != null) {
			String encVal = encryptor.decrypt(String.valueOf(value));
			return encVal;
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.Dealbook.gst.types.DealbookGenericType#set(java.sql.PreparedStatement,
	 * java.lang.Object, int, org.hibernate.engine.spi.SessionImplementor)
	 */
	@Override
	public void set(PreparedStatement st, String value, int index, SessionImplementor session) throws SQLException {
		if (value == null) {
			st.setNull(index, Types.VARCHAR);
		} else {
			String encVal = encryptor.encrypt(String.valueOf(value));
			st.setString(index, encVal);
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.Dealbook.gst.types.DealbookGenericType#nullSafeGet(java.sql.ResultSet,
	 * String[], org.hibernate.engine.spi.SessionImplementor, java.lang.Object)
	 */
	@Override
	public Object nullSafeGet(ResultSet rs, String[] names, SessionImplementor session, Object owner)
			throws HibernateException, SQLException {
		if (null == names || names.length < 1) {
			return null;
		}
		String value = rs.getString(names[0]);
		if (value != null) {
			String encVal = encryptor.decrypt(String.valueOf(value));
			return encVal;
		}
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.Dealbook.gst.types.DealbookGenericType#nullSafeSet(java.sql.
	 * PreparedStatement, java.lang.Object, int,
	 * org.hibernate.engine.spi.SessionImplementor)
	 */
	@Override
	public void nullSafeSet(PreparedStatement st, Object value, int index, SessionImplementor session)
			throws HibernateException, SQLException {
		if (null == st) {
			return;
		}
		if (value == null) {
			st.setNull(index, Types.VARCHAR);
		} else {
			String encVal = encryptor.encrypt(String.valueOf(value));
			st.setString(index, encVal);
		}

	}

	/**
	 * Transform.
	 *
	 * @param untransformed the untransformed
	 * @return the string
	 */
	String transform(String untransformed) {
		String decvAL = encryptor.decrypt(String.valueOf(untransformed));
		return decvAL;
	}

	/**
	 * Untransform.
	 *
	 * @param transformed the transformed
	 * @return the string
	 */
	String untransform(String transformed) {
		String encVal = encryptor.encrypt(String.valueOf(transformed));
		return encVal;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.type.LiteralType#objectToSQLString(java.lang.Object,
	 * org.hibernate.dialect.Dialect)
	 */
	@Override
	public String objectToSQLString(String value, Dialect dialect) throws Exception {
		if (value == null) {
			return null;
		}

		String transformed = transform(value);

		StringType stringType = new StringType();
		String sqlString = stringType.objectToSQLString(transformed, dialect);

		return sqlString;
	}

	/**
	 * The main method.
	 *
	 * @param s the arguments
	 */
	public static void main(String[] s) {
		DealbookTextType dealbookTextType = new DealbookTextType();
		byte[] bytesEncoded = Base64.encode("Vishal@123".getBytes());
		String encryptedText = dealbookTextType.untransform(new String(bytesEncoded));
		// System.out.println(encryptedText);
		String unencryptedText = dealbookTextType.transform(encryptedText);
		byte[] decoded = Base64.decode(unencryptedText.getBytes());
		// System.out.println(new String(decoded));
	}

	@Override
	public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner)
			throws HibernateException, SQLException {
		if (null == names || names.length < 1) {
			return null;
		}
		String value = rs.getString(names[0]);
		if (value != null) {
			String encVal = encryptor.decrypt(String.valueOf(value));
			return encVal;
		}
		return null;
	}

	@Override
	public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session)
			throws HibernateException, SQLException {
		if (null == st) {
			return;
		}
		if (value == null) {
			st.setNull(index, Types.VARCHAR);
		} else {
			String encVal = encryptor.encrypt(String.valueOf(value));
			st.setString(index, encVal);
		}
	}
}
