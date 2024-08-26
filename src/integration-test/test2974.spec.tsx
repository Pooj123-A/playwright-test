
import { test, expect } from "@playwright/experimental-ct-react";
import App2974 from "../example/App2974.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2974 />);
  await expect(component).toContainText("Learn React");
});
