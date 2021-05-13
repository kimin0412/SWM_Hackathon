package com.swmaestro.hackathon.swm14.dto;

public class ForecastDto {

	private int POP; // 강수확률

	private int PTY; // 강수형태

	private int T3H; // 3시간 기온

	public int getPOP() {
		return POP;
	}

	public void setPOP(int pOP) {
		POP = pOP;
	}

	public int getPTY() {
		return PTY;
	}

	public void setPTY(int pTY) {
		PTY = pTY;
	}

	public int getT3H() {
		return T3H;
	}

	public void setT3H(int t3h) {
		T3H = t3h;
	}

	@Override
	public String toString() {
		return "ForecastDto [POP=" + POP + ", PTY=" + PTY + ", T3H=" + T3H + "]";
	}

}
