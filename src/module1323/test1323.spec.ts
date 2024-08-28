
import { test, expect } from "@playwright/experimental-ct-react";
import App1323 from "./App1323.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1323 />);
  await expect(component).toContainText("Learn React");
});
