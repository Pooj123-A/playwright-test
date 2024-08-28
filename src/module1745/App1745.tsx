
import { test, expect } from "@playwright/experimental-ct-react";
import App1745 from "./App1745.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1745 />);
  await expect(component).toContainText("Learn React");
});
