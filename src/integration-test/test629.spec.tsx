
import { test, expect } from "@playwright/experimental-ct-react";
import App629 from "../example/App629.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App629 />);
  await expect(component).toContainText("Learn React");
});
