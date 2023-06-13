const lpuFunction = (numberOfStudents, numberOfSeatsRemaining) => {
    isAdmissionPossible(numberOfStudents, numberOfSeatsRemaining, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Admission Possible");
      }
    });
  };
  
const isAdmissionPossible = (
    numberOfStudents,
    numberOfSeatsRemaining,
    callback
  ) => {
    setTimeout(() => {
      if (numberOfSeatsRemaining > numberOfStudents) {
        callback(undefined, true);
      }
      return callback("Admission Not Possible");
    }, 5 * 1000);
  };
  
  lpuFunction(700, 1000);