
import { test, expect } from "@playwright/experimental-ct-react";
import App2757 from "../example/App2757.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2757 />);
  await expect(component).toContainText("Learn React");
});
