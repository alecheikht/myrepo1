package com.app.api.periode;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class PeriodeServiceTest {

	@Test
	void testGetTotalWeeks() {
		//fail("Not yet implemented");
		assertTrue("Test1",PeriodeService.getTotalWeeks(2019)==53);
	}

	@Test
	void testGetNextPeriode() {
		//fail("Not yet implemented");
		assertTrue("Test2",PeriodeService.getNextPeriode("201901").equals("201902"));
		assertTrue("Test3",PeriodeService.getNextPeriode("201909").equals("201910"));
		assertTrue("Test4",PeriodeService.getNextPeriode("201952").equals("201953"));
		assertTrue("Test5",PeriodeService.getNextPeriode("201953").equals("202001"));
	}

}
