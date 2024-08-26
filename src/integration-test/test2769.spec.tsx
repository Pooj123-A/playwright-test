
import { test, expect } from "@playwright/experimental-ct-react";
import App2769 from "../example/App2769.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2769 />);
  await expect(component).toContainText("Learn React");
});
