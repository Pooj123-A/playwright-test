
import { test, expect } from "@playwright/experimental-ct-react";
import App831 from "../example/App831.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App831 />);
  await expect(component).toContainText("Learn React");
});
