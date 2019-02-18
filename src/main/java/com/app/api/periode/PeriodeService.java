package com.app.api.periode;

public class PeriodeService {
	public static int getTotalWeeks(int annee){

	    return 53;
	}
	
	public static String getNextPeriode(String periode) {
		String nextPeriode = null;
		int year = Integer.parseInt(periode.substring(0, 4));
		int week= Integer.parseInt(periode.substring(4));
		int totalWeeks=getTotalWeeks(year);
		if(totalWeeks > week) {
			nextPeriode = String.valueOf(year*100 + week + 1);
		}else {
			nextPeriode = String.valueOf((year+1)*100 + 1);
		}
		
		return nextPeriode;
	
	}
}
