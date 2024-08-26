
import { test, expect } from "@playwright/experimental-ct-react";
import App1016 from "../example/App1016.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1016 />);
  await expect(component).toContainText("Learn React");
});
