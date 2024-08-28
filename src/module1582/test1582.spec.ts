
import { test, expect } from "@playwright/experimental-ct-react";
import App1582 from "./App1582.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1582 />);
  await expect(component).toContainText("Learn React");
});
