
import { test, expect } from "@playwright/experimental-ct-react";
import App1337 from "../example/App1337.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1337 />);
  await expect(component).toContainText("Learn React");
});
