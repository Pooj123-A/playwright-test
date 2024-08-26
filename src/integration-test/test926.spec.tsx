
import { test, expect } from "@playwright/experimental-ct-react";
import App926 from "../example/App926.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App926 />);
  await expect(component).toContainText("Learn React");
});
