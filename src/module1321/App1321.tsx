
import { test, expect } from "@playwright/experimental-ct-react";
import App1321 from "./App1321.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1321 />);
  await expect(component).toContainText("Learn React");
});
