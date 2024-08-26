
import { test, expect } from "@playwright/experimental-ct-react";
import App2989 from "../example/App2989.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2989 />);
  await expect(component).toContainText("Learn React");
});
