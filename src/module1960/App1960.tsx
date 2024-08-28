
import { test, expect } from "@playwright/experimental-ct-react";
import App1960 from "./App1960.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1960 />);
  await expect(component).toContainText("Learn React");
});
