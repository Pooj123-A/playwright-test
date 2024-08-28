
import { test, expect } from "@playwright/experimental-ct-react";
import App1521 from "./App1521.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1521 />);
  await expect(component).toContainText("Learn React");
});
