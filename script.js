function calculateCarpet() {
  // 👇 Write your code here 👇
  let roomOneWidth = getRoomWidth(1);
  let roomOneLength = getRoomLength(1);

  let roomTwoWidth = getRoomWidth(2);
  let roomTwoLength = getRoomLength(2);

  let roomOneArea = (roomOneWidth * roomOneLength) * 1.10;
  let roomTwoArea = (roomTwoWidth * roomTwoLength) * 1.10;

  let totalArea = roomOneArea + roomTwoArea
  showResult(totalArea)

  console.log("click");
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
  (1) Function Explanations: 

  A) "validateRoomNumber" Function
  This function serves to validate whether or not the programmer has appropriately entered the room number parameter into the relevant function (ie getRoomWidth, getRomLength functions).

  The first conditional statement in this function returns a value of "false" when no number has been entered as a parameter into the function. A message is displayed on the console describing the error and provides the programmer with a hint of how to debug the issue.

  The second conditional statement returns a value of "false" when a string has been entered into the room number paremeter rather than a numeric data type. A message is displayed on the console describing the error and provides the programmer with a hint of how to debug the issue.

  The third conditional statement returns a value of "false" if the value entered into the room number paremeter is not a number OR not equal to 1 and 2. A message is displayed on the console describing the error and provides the programmer with a hint of how to debug the issue.

  B) "validateResult" Function
  This function serves to ensure that the programmer has entered a parameter into the relevant function they have called. 

  This function returns a value of "false" when a function is called but the parameters are left undefined. A message is displayed on the console describing the error and provides the programmer with a hint of how to debug the issue.

  (2) Custom styles added: 

  A) Added a container for the callout beneath the header image. included color styling and rounded borders.

  B) Added font styling using the Arvo font-family

  C) Added some spacing above "Required Sqft:"

*/