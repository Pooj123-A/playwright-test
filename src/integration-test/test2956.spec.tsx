
import { test, expect } from "@playwright/experimental-ct-react";
import App2956 from "../example/App2956.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2956 />);
  await expect(component).toContainText("Learn React");
});
