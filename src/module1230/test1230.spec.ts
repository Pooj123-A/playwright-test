
import { test, expect } from "@playwright/experimental-ct-react";
import App1230 from "./App1230.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1230 />);
  await expect(component).toContainText("Learn React");
});
