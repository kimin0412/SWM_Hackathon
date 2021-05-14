package com.swmaestro.hackathon.swm14.dto;

public class KmaDto {
	private String hour;
	private double temp;
	private int pty;
	private int pop;
	private String wfKor;

	public String getHour() {
		return hour;
	}

	public void setHour(String hour) {
		this.hour = hour;
	}

	public double getTemp() {
		return temp;
	}

	public void setTemp(double temp) {
		this.temp = temp;
	}

	public int getPty() {
		return pty;
	}

	public void setPty(int pty) {
		this.pty = pty;
	}

	public int getPop() {
		return pop;
	}

	public void setPop(int pop) {
		this.pop = pop;
	}

	public String getWfKor() {
		return wfKor;
	}

	public void setWfKor(String wfKor) {
		this.wfKor = wfKor;
	}

	@Override
	public String toString() {
		return "KmaDto [hour=" + hour + ", temp=" + temp + ", pty=" + pty + ", pop=" + pop + ", wfKor=" + wfKor + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((hour == null) ? 0 : hour.hashCode());
		result = prime * result + ((wfKor == null) ? 0 : wfKor.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		KmaDto other = (KmaDto) obj;
		if (hour == null) {
			if (other.hour != null)
				return false;
		} else if (!hour.equals(other.hour))
			return false;
		if (wfKor == null) {
			if (other.wfKor != null)
				return false;
		} else if (!wfKor.equals(other.wfKor))
			return false;
		return true;
	}

}
