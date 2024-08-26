
import { test, expect } from "@playwright/experimental-ct-react";
import App2361 from "../example/App2361.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2361 />);
  await expect(component).toContainText("Learn React");
});
