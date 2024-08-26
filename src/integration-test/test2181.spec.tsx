
import { test, expect } from "@playwright/experimental-ct-react";
import App2181 from "../example/App2181.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2181 />);
  await expect(component).toContainText("Learn React");
});
