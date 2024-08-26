
import { test, expect } from "@playwright/experimental-ct-react";
import App1334 from "../example/App1334.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1334 />);
  await expect(component).toContainText("Learn React");
});
