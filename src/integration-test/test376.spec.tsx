
import { test, expect } from "@playwright/experimental-ct-react";
import App376 from "../example/App376.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App376 />);
  await expect(component).toContainText("Learn React");
});
