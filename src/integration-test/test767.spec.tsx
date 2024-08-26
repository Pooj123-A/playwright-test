
import { test, expect } from "@playwright/experimental-ct-react";
import App767 from "../example/App767.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App767 />);
  await expect(component).toContainText("Learn React");
});
