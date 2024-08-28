
import { test, expect } from "@playwright/experimental-ct-react";
import App1975 from "./App1975.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1975 />);
  await expect(component).toContainText("Learn React");
});
