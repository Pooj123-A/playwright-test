
import { test, expect } from "@playwright/experimental-ct-react";
import App1201 from "./App1201.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1201 />);
  await expect(component).toContainText("Learn React");
});
