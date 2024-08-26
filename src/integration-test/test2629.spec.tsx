
import { test, expect } from "@playwright/experimental-ct-react";
import App2629 from "../example/App2629.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2629 />);
  await expect(component).toContainText("Learn React");
});
