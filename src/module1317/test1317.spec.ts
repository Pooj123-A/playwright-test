
import { test, expect } from "@playwright/experimental-ct-react";
import App1317 from "./App1317.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1317 />);
  await expect(component).toContainText("Learn React");
});
