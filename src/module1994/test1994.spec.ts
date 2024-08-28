
import { test, expect } from "@playwright/experimental-ct-react";
import App1994 from "./App1994.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1994 />);
  await expect(component).toContainText("Learn React");
});
