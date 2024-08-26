
import { test, expect } from "@playwright/experimental-ct-react";
import App1006 from "../example/App1006.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1006 />);
  await expect(component).toContainText("Learn React");
});
