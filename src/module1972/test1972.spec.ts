
import { test, expect } from "@playwright/experimental-ct-react";
import App1972 from "./App1972.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1972 />);
  await expect(component).toContainText("Learn React");
});
