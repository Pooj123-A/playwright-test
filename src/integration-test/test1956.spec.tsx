
import { test, expect } from "@playwright/experimental-ct-react";
import App1956 from "../example/App1956.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1956 />);
  await expect(component).toContainText("Learn React");
});
