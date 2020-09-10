package com.euclid.dealbook.types;

import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Objects;

import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.type.LiteralType;
import org.hibernate.usertype.UserType;

/**
 * The Class DealbookGenericType.
 *
 * @param <T> the generic type
 */
public abstract class DealbookGenericType<T> implements UserType, LiteralType<T> {

	/**
	 * The clazz.
	 */
	private final Class<T> clazz;

	/**
	 * Instantiates a new pts generic type.
	 *
	 * @param clazz the clazz
	 * @PTS Instantiates a new pts generic type.
	 */
	protected DealbookGenericType(Class<T> clazz) {
		this.clazz = clazz;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#nullSafeGet(java.sql.ResultSet,
	 * String[], org.hibernate.engine.spi.SessionImplementor, java.lang.Object)
	 */
	public Object nullSafeGet(ResultSet rs, String[] names, SessionImplementor session, Object owner)
			throws SQLException {
		return get(rs, names, session, owner);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#nullSafeSet(java.sql.PreparedStatement,
	 * java.lang.Object, int, org.hibernate.engine.spi.SessionImplementor)
	 */
	public void nullSafeSet(PreparedStatement st, Object value, int index, SessionImplementor session)
			throws SQLException {
		set(st, clazz.cast(value), index, session);
	}

	/**
	 * Gets the.
	 *
	 * @param rs      the rs
	 * @param names   the names
	 * @param session the session
	 * @param owner   the owner
	 * @return the t
	 * @throws SQLException the SQL exception
	 */
	protected abstract T get(ResultSet rs, String[] names, SessionImplementor session, Object owner)
			throws SQLException;

	/**
	 * Sets the.
	 *
	 * @param st      the st
	 * @param value   the value
	 * @param index   the index
	 * @param session the session
	 * @throws SQLException the SQL exception
	 */
	protected abstract void set(PreparedStatement st, T value, int index, SessionImplementor session)
			throws SQLException;

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#returnedClass()
	 */
	@Override
	public Class<T> returnedClass() {
		return clazz;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#equals(java.lang.Object,
	 * java.lang.Object)
	 */
	@Override
	public boolean equals(Object x, Object y) {
		return Objects.equals(x, y);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#hashCode(java.lang.Object)
	 */
	@Override
	public int hashCode(Object x) {
		return x.hashCode();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#deepCopy(java.lang.Object)
	 */
	@Override
	public Object deepCopy(Object value) {
		return value;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#isMutable()
	 */
	@Override
	public boolean isMutable() {
		return false;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#disassemble(java.lang.Object)
	 */
	@Override
	public Serializable disassemble(Object o) {
		return (Serializable) o;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#assemble(java.io.Serializable,
	 * java.lang.Object)
	 */
	@Override
	public Object assemble(Serializable cached, Object owner) {
		return cached;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.hibernate.usertype.UserType#replace(java.lang.Object,
	 * java.lang.Object, java.lang.Object)
	 */
	@Override
	public Object replace(Object o, Object target, Object owner) {
		return o;
	}

}