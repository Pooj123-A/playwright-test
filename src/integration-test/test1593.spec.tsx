
import { test, expect } from "@playwright/experimental-ct-react";
import App1593 from "../example/App1593.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1593 />);
  await expect(component).toContainText("Learn React");
});
