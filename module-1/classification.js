/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 * Test comment for Jenkins
 * Test js-webinar-test-on-push
 * Test js-webinar-test-on-push2
 * Test js-webinar-test-on-push3
 * Test js-webinar-test-on-push4
 * Test js-webinar-test-on-push5
 * Test js-webinar-test-on-push6
 * Test js-webinar-test-on-push7
 * Test js-webinar-test-on-push8
 * Test js-webinar-test-on-push9
 * Test js-webinar-test-on-push10
 * Test js-webinar-test-on-push11
 * Test js-webinar-test-on-push12
 * Test js-webinar-test-on-push13
 * Test js-webinar-test-on-push14
 * Test js-webinar-test-on-push15
 * Test js-webinar-test-on-push16
 * Test js-webinar-test-on-push17
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    gradeOfStudent = (score <= 100 && score >= 90) ? 5
                    : (score <= 89 && score >= 80) ? 4
                    : (score <= 79 && score >= 70) ? 3
                    : (score <= 69 && score >= 60) ? 2
                    : (score <= 59 && score >= 0) ? 1
                    : 0
    //gradeOfStudent = Math.floor((Math.max(50, Math.min(99, score)) - 40) / 10);
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}

module.exports = grade;
