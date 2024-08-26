
import { test, expect } from "@playwright/experimental-ct-react";
import App772 from "../example/App772.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App772 />);
  await expect(component).toContainText("Learn React");
});
