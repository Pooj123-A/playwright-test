
import { test, expect } from "@playwright/experimental-ct-react";
import App1099 from "./App1099.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1099 />);
  await expect(component).toContainText("Learn React");
});
