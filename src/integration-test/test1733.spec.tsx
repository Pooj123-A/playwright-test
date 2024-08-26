
import { test, expect } from "@playwright/experimental-ct-react";
import App1733 from "../example/App1733.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1733 />);
  await expect(component).toContainText("Learn React");
});
