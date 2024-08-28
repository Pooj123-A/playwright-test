
import { test, expect } from "@playwright/experimental-ct-react";
import App1011 from "./App1011.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1011 />);
  await expect(component).toContainText("Learn React");
});
