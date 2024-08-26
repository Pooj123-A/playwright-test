
import { test, expect } from "@playwright/experimental-ct-react";
import App1690 from "./App1690.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1690 />);
  await expect(component).toContainText("Learn React");
});
