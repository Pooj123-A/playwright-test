
import { test, expect } from "@playwright/experimental-ct-react";
import App1987 from "./App1987.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1987 />);
  await expect(component).toContainText("Learn React");
});
