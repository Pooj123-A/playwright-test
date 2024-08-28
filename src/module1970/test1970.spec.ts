
import { test, expect } from "@playwright/experimental-ct-react";
import App1970 from "./App1970.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1970 />);
  await expect(component).toContainText("Learn React");
});
