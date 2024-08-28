
import { test, expect } from "@playwright/experimental-ct-react";
import App1300 from "./App1300.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1300 />);
  await expect(component).toContainText("Learn React");
});
