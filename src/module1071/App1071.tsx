
import { test, expect } from "@playwright/experimental-ct-react";
import App1071 from "./App1071.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1071 />);
  await expect(component).toContainText("Learn React");
});
