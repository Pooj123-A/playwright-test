
import { test, expect } from "@playwright/experimental-ct-react";
import App1326 from "./App1326.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1326 />);
  await expect(component).toContainText("Learn React");
});
