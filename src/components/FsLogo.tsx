import { Link } from "react-router-dom";
interface Typewidth {
  width: string;
}

export default function FsLogo({ width }: Typewidth): JSX.Element {
  return (
    <Link to={"/"}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={width}
        viewBox="0 0 300 30"
        enableBackground="new 0 0 300 30"
        xmlSpace="preserve"
      >
        <image
          id="image0"
          width={width}
          x={0}
          y={0}
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAeCAQAAAA8sevsAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
cwAALiMAAC4jAXilP3YAAAAHdElNRQfnBhsWNRf2hDwXAAAEkklEQVR42u2b3ZmqMBCGZ86zDdAC
WwKWACVoCVoClAAlaAlaApQAJSwlaAlzbtx1DRPIZBL0Yt9LlZB8mfzMj0jwxx8RIKCcdJxn28/o
eP9dT3uP/j2eL51+vzd61/58k0563lrayKn8eauUK2U/rZgcF3vv8UxIxUP1mQIYVj/70tKcSkqE
Iv3mi9LFJ5SGRSVdVXpkoSdJaBoqxcMZ1j9ZtyfcYDc3SKiNj3JoQcLzbphC/5i48FBKPdQgMn2D
Cod4/XMYgV7xQGgNa4ejdZDbySABADKqwRHKwNyhEugpjyMFpdCCzmwv2MTpm+MI1IqHQ2dYFXbW
QaZg20RL2jq2z09z63bbElPD4kE7ywiHKP1yJIjiwdAY1vz6nDtSatlNi3k++BqkHLTi7/AWulci
Yiouxt+wZtcnlbPTZF9brpTzvqgH2gP29beruIoL+WA/HeCy+GRnX5+UwdKOsqUtLr9jvoU26B4x
NawRTu6Pv/h2tYbiIiyGpZTJZTc50mC/+DuRQ0s7ZRsPzKNixM9ALa/BOooL0HqFDOR2CU4CbM4Z
tMHCD6ZhdV6tvIQVFXfmQ9+EMcgtcD5bxWzVOZXqAySFlnYYwghuhmnFiJdli/6sh18aWXHPPvOG
tdzYg+73pdXi8jbYUMIMv6ZOfeVNoKUDCm5DFgZDoIxqrNStPpOFN9foivv2WZnSMc52OjO/uSd9
qLd/Z+mbmZ45UmvpR2l9xjGlM0mFSLhSOV2K6hzsfcwL8xdW8UB91qZ0jJAD6/I+kj5ceEIYFcYC
+K28lidrDU7g72EmUENNRMe1o0XxFfdFZ1hP7r7F5W2+PREcgDtaStn1GyvgD6g9qXJieAsQN9/D
V8xcpsk6ivuhMSwzJMi5vE/ReWyAO9/PsnWOjSXxnVOv2THwAvo7VSIdjYqVFPfB37CMhA7r8k6j
8zvmwEkXg3sGeIGCPbgy6DX5Pmxgow4zpOBRdebDmorL8TUs4+CwuLwHMzKOI3tH2kuTpNhBAVyw
LwVVghoHLGADlUPmwU6cFLnB2orLO+jnCTx1i1K2OM6yKlg/5sqV8E29QuOtnNdj4lFBKtIvp69J
u8n9m4m35NCa0zPRFI9c6HfCJZ5XNJdXH6xRoAOzOSfyzRlH1B9carBjMorxb1kvUVxCgJTOgss7
weJ/bX2qrLCQJIojoavi8uCViruiTunMu7zWro/MdJR0kSdJ8UBjyLVHmbCAJmMnOSKvVtwNpWFR
MufyMhXYcyRwho28D9jQLVR6lRI4q3egIWbB3zso7oL2KCztLq9DjZCJJEf5CzxBEUiPY4CDLW7V
01sovozKsCwu73c83qfGs/aLCmMHG1Bv6lSry5MBbjEN630UX0JhWNa8+gDgXCM0xTMqjAMUbJTZ
OZdvmTQph3jFdO+l+DyaHetod3kVk+Qd4sQRCib84Og1Upiq8F3U8t83U3wOb8OikvGe7i6vcpK8
/6yENyyMg6hy3j/O6ujTCT5jmtU7Km7H0yuknL0mVjje/Rbt37tG3wJA3NH+fsEdoHGdaDorSvA6
6OL/meJ9Fef5D/XFu2LYu9hfAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA2LTI3VDIwOjUzOjIz
KzAyOjAwIzeulAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNi0yN1QyMDo1MzoyMyswMjowMFJq
FigAAAAASUVORK5CYII="
        />
      </svg>
    </Link>
  );
}
