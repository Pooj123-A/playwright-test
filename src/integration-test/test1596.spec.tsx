
import { test, expect } from "@playwright/experimental-ct-react";
import App1596 from "../example/App1596.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1596 />);
  await expect(component).toContainText("Learn React");
});
