
import { test, expect } from "@playwright/experimental-ct-react";
import App213 from "../example/App213.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App213 />);
  await expect(component).toContainText("Learn React");
});
