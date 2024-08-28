
import { test, expect } from "@playwright/experimental-ct-react";
import App1052 from "./App1052.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1052 />);
  await expect(component).toContainText("Learn React");
});
