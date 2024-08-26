
import { test, expect } from "@playwright/experimental-ct-react";
import App1810 from "../example/App1810.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1810 />);
  await expect(component).toContainText("Learn React");
});
